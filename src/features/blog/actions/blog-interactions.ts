'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';

/**
 * Handles Social Interactions for Blogs (Likes, Comments, Bookmarks).
 * Uses visitorId for cross-session persistence.
 */

export async function toggleLike(blogId: number, visitorId: string) {
  try {
    // Check if interaction exists using stable visitorId
    const existing = await query(
      'SELECT id FROM blog_likes WHERE blog_id = $1 AND session_id = $2', 
      [blogId, visitorId]
    );

    if (existing.rows.length > 0) {
      await query('DELETE FROM blog_likes WHERE id = $1', [existing.rows[0].id]);
      return { success: true, action: 'unliked' };
    } else {
      await query(
        'INSERT INTO blog_likes (blog_id, session_id) VALUES ($1, $2)', 
        [blogId, visitorId]
      );
      return { success: true, action: 'liked' };
    }
  } catch (e) {
    console.error('Like toggle error:', e);
    return { success: false };
  }
}

export async function toggleBookmark(blogId: number, visitorId: string) {
  try {
    const existing = await query(
      'SELECT id FROM blog_bookmarks WHERE blog_id = $1 AND session_id = $2', 
      [blogId, visitorId]
    );

    if (existing.rows.length > 0) {
      await query('DELETE FROM blog_bookmarks WHERE id = $1', [existing.rows[0].id]);
      return { success: true, action: 'unbookmarked' };
    } else {
      await query(
        'INSERT INTO blog_bookmarks (blog_id, session_id) VALUES ($1, $2)', 
        [blogId, visitorId]
      );
      return { success: true, action: 'bookmarked' };
    }
  } catch (e) {
    return { success: false };
  }
}

export async function addComment(blogId: number, authorName: string, content: string) {
  try {
    await query(
      'INSERT INTO blog_comments (blog_id, author_name, content, status) VALUES ($1, $2, $3, $4)',
      [blogId, authorName, content, 'approved']
    );
    revalidatePath(`/blog`);
    return { success: true };
  } catch (e) {
    console.error('Comment error:', e);
    return { success: false };
  }
}

export async function getBlogStats(blogId: number, visitorId?: string) {
  try {
    const likes = await query('SELECT COUNT(*) FROM blog_likes WHERE blog_id = $1', [blogId]);
    const comments = await query(
      'SELECT * FROM blog_comments WHERE blog_id = $1 AND status = $2 ORDER BY created_at DESC', 
      [blogId, 'approved']
    );
    
    let isLiked = false;
    let isBookmarked = false;

    if (visitorId) {
      const likedRes = await query(
        'SELECT id FROM blog_likes WHERE blog_id = $1 AND session_id = $2', 
        [blogId, visitorId]
      );
      isLiked = likedRes.rows.length > 0;

      const bookRes = await query(
        'SELECT id FROM blog_bookmarks WHERE blog_id = $1 AND session_id = $2', 
        [blogId, visitorId]
      );
      isBookmarked = bookRes.rows.length > 0;
    }

    return {
      likeCount: parseInt(likes.rows[0].count) || 0,
      comments: comments.rows || [],
      userInteractions: { isLiked, isBookmarked }
    };
  } catch (e) {
    return { likeCount: 0, comments: [], userInteractions: { isLiked: false, isBookmarked: false } };
  }
}

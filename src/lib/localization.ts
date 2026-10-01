/**
 * Localization configuration for various countries.
 * Mapping country codes to currency symbols and localized budget ranges.
 */

export interface LocalizationConfig {
  countryName: string;
  currencySymbol: string;
  currencyCode: string;
  phoneCode: string;
  budgetRanges: { label: string; value: string }[];
}

export const LOCALIZATION_DATA: Record<string, LocalizationConfig> = {
  IN: {
    countryName: "India",
    currencySymbol: "₹",
    currencyCode: "INR",
    phoneCode: "+91",
    budgetRanges: [
      { label: "Basic (₹50k - ₹2L)", value: "basic_inr" },
      { label: "Standard (₹2L - ₹8L)", value: "standard_inr" },
      { label: "Advanced (₹8L - ₹20L)", value: "advanced_inr" },
      { label: "Premium (₹20L+)", value: "premium_inr" },
    ],
  },
  US: {
    countryName: "United States",
    currencySymbol: "$",
    currencyCode: "USD",
    phoneCode: "+1",
    budgetRanges: [
      { label: "Basic ($1k - $3k)", value: "basic_usd" },
      { label: "Standard ($3k - $10k)", value: "standard_usd" },
      { label: "Advanced ($10k - $25k)", value: "advanced_usd" },
      { label: "Premium ($25k+)", value: "premium_usd" },
    ],
  },
  GB: {
    countryName: "United Kingdom",
    currencySymbol: "£",
    currencyCode: "GBP",
    phoneCode: "+44",
    budgetRanges: [
      { label: "Basic (£1k - £3k)", value: "basic_gbp" },
      { label: "Standard (£3k - £8k)", value: "standard_gbp" },
      { label: "Advanced (£8k - £20k)", value: "advanced_gbp" },
      { label: "Premium (£20k+)", value: "premium_gbp" },
    ],
  },
  EU: {
    countryName: "European Union",
    currencySymbol: "€",
    currencyCode: "EUR",
    phoneCode: "+49",
    budgetRanges: [
      { label: "Basic (€1k - €3k)", value: "basic_eur" },
      { label: "Standard (€3k - €10k)", value: "standard_eur" },
      { label: "Advanced (€10k - €25k)", value: "advanced_eur" },
      { label: "Premium (€25k+)", value: "premium_eur" },
    ],
  },
};

export const DEFAULT_LOCALIZATION: LocalizationConfig = LOCALIZATION_DATA.US;

/**
 * Returns localization data based on country code.
 */
export function getLocalization(countryCode: string | null): LocalizationConfig {
  if (!countryCode) return DEFAULT_LOCALIZATION;
  const code = countryCode.toUpperCase();
  return LOCALIZATION_DATA[code] || DEFAULT_LOCALIZATION;
}

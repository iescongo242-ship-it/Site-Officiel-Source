/**
 * Utilitaires de sécurité pour l'application IESC
 */

// Sanitize une chaîne de caractères pour éviter les injections XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Validation d'email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Validation de numéro de téléphone congolais
export function isValidPhone(phone: string): boolean {
  if (!phone) return true; // optionnel
  const phoneRegex = /^(\+?242)?[\s-]?0?[456]\d[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// Limiter la longueur d'un texte
export function truncateInput(input: string, maxLength: number): string {
  return input.slice(0, maxLength);
}

// Rate limiter simple côté client
export class RateLimiter {
  private timestamps: number[] = [];
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number, windowMs: number) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  canProceed(): boolean {
    const now = Date.now();
    this.timestamps = this.timestamps.filter(t => now - t < this.windowMs);
    if (this.timestamps.length >= this.maxAttempts) {
      return false;
    }
    this.timestamps.push(now);
    return true;
  }

  getTimeUntilReset(): number {
    if (this.timestamps.length === 0) return 0;
    const oldest = this.timestamps[0];
    return Math.max(0, this.windowMs - (Date.now() - oldest));
  }
}

// Constantes de validation
export const VALIDATION_LIMITS = {
  NOM_MAX: 100,
  EMAIL_MAX: 255,
  TELEPHONE_MAX: 20,
  SUJET_MAX: 100,
  MESSAGE_MAX: 2000,
  CHATBOT_INPUT_MAX: 500,
} as const;

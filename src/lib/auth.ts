import jwt from "jsonwebtoken";

export function getJwtSecret(): string {
  const secret = process.env.WGMI_SHARE_JWT_SECRET;
  if (!secret) throw new Error("WGMI_SHARE_JWT_SECRET not set");
  return secret;
}

export function getPortfolioPassword(): string {
  const pw = process.env.WGMI_PORTFOLIO_PASSWORD;
  if (!pw) throw new Error("WGMI_PORTFOLIO_PASSWORD not set");
  return pw;
}

export function generateShareToken(slug: string, expiryDays: number): string {
  const secret = getJwtSecret();
  return jwt.sign({ slug }, secret, { expiresIn: `${expiryDays}d` });
}

export function verifyShareToken(token: string): { slug: string } | null {
  try {
    const secret = getJwtSecret();
    const decoded = jwt.verify(token, secret) as { slug: string };
    return decoded;
  } catch {
    return null;
  }
}

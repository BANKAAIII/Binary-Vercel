export default interface TokenInterface {
    id: unknown; 
    username: string;
    email: string;
    iat: number; 
    exp: number;
    validity: string; // Human-readable string like "1h", "7d"
  }

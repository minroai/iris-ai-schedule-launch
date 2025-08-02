export interface EarlyAccessEmail {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      early_access_emails: {
        Row: EarlyAccessEmail;
        Insert: Omit<EarlyAccessEmail, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<EarlyAccessEmail, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
} 
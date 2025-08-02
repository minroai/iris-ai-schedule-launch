-- Create early_access_users table
CREATE TABLE IF NOT EXISTS early_access_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_early_access_users_email ON early_access_users(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_early_access_users_created_at ON early_access_users(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE early_access_users ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow insert for early access users" ON early_access_users
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users (optional, for admin purposes)
CREATE POLICY "Allow read for authenticated users" ON early_access_users
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_early_access_users_updated_at
  BEFORE UPDATE ON early_access_users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for documentation
COMMENT ON TABLE early_access_users IS 'Stores early access signup information for Iris AI';
COMMENT ON COLUMN early_access_users.id IS 'Unique identifier for the early access user';
COMMENT ON COLUMN early_access_users.email IS 'Email address of the user requesting early access';
COMMENT ON COLUMN early_access_users.created_at IS 'Timestamp when the user signed up for early access';
COMMENT ON COLUMN early_access_users.updated_at IS 'Timestamp when the record was last updated'; 
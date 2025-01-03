/*
  # Initial Schema Setup

  1. New Tables
    - `agents`
      - `id` (uuid, primary key)
      - `name` (text)
      - `owner` (text)
      - `rarity` (text)
      - `image_url` (text)
      - `price` (numeric)
      - `traits` (jsonb)
      - `created_at` (timestamptz)
      - `listed_at` (timestamptz)

    - `activities`
      - `id` (uuid, primary key)
      - `agent_id` (uuid, foreign key)
      - `type` (text)
      - `from_address` (text)
      - `to_address` (text)
      - `price` (numeric)
      - `created_at` (timestamptz)

    - `notifications`
      - `id` (uuid, primary key)
      - `user_address` (text)
      - `agent_id` (uuid, foreign key)
      - `type` (text)
      - `title` (text)
      - `message` (text)
      - `read` (boolean)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create agents table
CREATE TABLE agents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  owner text NOT NULL,
  rarity text NOT NULL,
  image_url text NOT NULL,
  price numeric,
  traits jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  listed_at timestamptz
);

-- Create activities table
CREATE TABLE activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id uuid REFERENCES agents(id) ON DELETE CASCADE,
  type text NOT NULL,
  from_address text,
  to_address text NOT NULL,
  price numeric,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create notifications table
CREATE TABLE notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_address text NOT NULL,
  agent_id uuid REFERENCES agents(id) ON DELETE CASCADE,
  type text NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Agents policies
CREATE POLICY "Anyone can view agents"
  ON agents FOR SELECT
  USING (true);

CREATE POLICY "Users can create their own agents"
  ON agents FOR INSERT
  WITH CHECK (auth.uid()::text = owner);

CREATE POLICY "Users can update their own agents"
  ON agents FOR UPDATE
  USING (auth.uid()::text = owner);

-- Activities policies
CREATE POLICY "Anyone can view activities"
  ON activities FOR SELECT
  USING (true);

CREATE POLICY "Users can create activities"
  ON activities FOR INSERT
  WITH CHECK (auth.uid()::text = to_address OR auth.uid()::text = from_address);

-- Notifications policies
CREATE POLICY "Users can view their notifications"
  ON notifications FOR SELECT
  USING (auth.uid()::text = user_address);

CREATE POLICY "Users can create notifications"
  ON notifications FOR INSERT
  WITH CHECK (auth.uid()::text = user_address);

CREATE POLICY "Users can update their notifications"
  ON notifications FOR UPDATE
  USING (auth.uid()::text = user_address);
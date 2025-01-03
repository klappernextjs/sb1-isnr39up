export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      agents: {
        Row: {
          id: string
          name: string
          owner: string
          rarity: string
          image_url: string
          price: number | null
          traits: Json
          created_at: string
          listed_at: string | null
        }
        Insert: {
          id?: string
          name: string
          owner: string
          rarity: string
          image_url: string
          price?: number | null
          traits?: Json
          created_at?: string
          listed_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          owner?: string
          rarity?: string
          image_url?: string
          price?: number | null
          traits?: Json
          created_at?: string
          listed_at?: string | null
        }
      }
      activities: {
        Row: {
          id: string
          agent_id: string
          type: string
          from_address: string | null
          to_address: string
          price: number | null
          created_at: string
        }
        Insert: {
          id?: string
          agent_id: string
          type: string
          from_address?: string | null
          to_address: string
          price?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          agent_id?: string
          type?: string
          from_address?: string | null
          to_address?: string
          price?: number | null
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_address: string
          agent_id: string
          type: string
          title: string
          message: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_address: string
          agent_id: string
          type: string
          title: string
          message: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_address?: string
          agent_id?: string
          type?: string
          title?: string
          message?: string
          read?: boolean
          created_at?: string
        }
      }
    }
  }
}
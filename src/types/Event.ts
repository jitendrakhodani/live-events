export interface Event {
  id: number;
  created_at: string;
  asset_url: string;
  created_by: string;
  event_timestamp: string;
  title: string;
  description: string;
  speakers: string[];
  topic: string;
  venue: string;
  extra_data: Record<string, any>;
}

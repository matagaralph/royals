interface Campaign {
  id: number;
  name: string;
  status: string;
  start_date: string;
  end_date: string;
  company_id: string;
  min_points_per_voucher: string;
  min_spend_for_point: number;
}

interface Issuer {
  id: number;
  name: string;
}

interface Reward {
  id: number;
  campaign_id: number;
  title: string;
  description: string;
  points_required: number;
  created_at: string;
  updated_at: string;
}

interface Issuer {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  role: 'issuer';
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  pivot: {
    [key: string]: any;
  };
}

interface Voucher {
  id: number;
  campaign_id: number;
  points_value: number;
  code: string;
  reference: string | null;
  scanned_at: string | null;
  created_at: string;
  updated_at: string;
}

interface CampaignResponse {
  id: number;
  name: string;
  description: string;
  company: string;
  min_points_per_voucher: number;
  min_spend_for_point: number;
  start_date: string;
  end_date: string;
  status: 'active' | 'inactive';
  duration: number;
  total_vouchers: number;
  total_rewards: number;
  users_participating: number;
  issuers_assigned: number;
}

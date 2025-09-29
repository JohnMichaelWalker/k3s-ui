export type Status = 'up' | 'degraded' | 'down' | 'unknown';

export type DashboardItemModel = {
  title: string;
  description?: string;
  /**
   * Icon for the app.
   * - string: treated as image URL for the Avatar
   * - ReactNode: e.g. <PodsIcon />, <InsertEmoticonOutlined />
   */
  icon?: string | React.ReactNode;
  /** Optional click handler (if provided, the card is focusable/clickable) */
  onClick?: (e: React.MouseEvent) => void;
  /** Optional href to make the entire card a link */
  href?: string;
  /** Optional aria-label override for accessibility */
  ariaLabel?: string;
  /** Optional custom right-click menu trigger */
  onContextMenu?: (e: React.MouseEvent) => void;
  /** The status of the service */
  serviceStatus?: Status
};
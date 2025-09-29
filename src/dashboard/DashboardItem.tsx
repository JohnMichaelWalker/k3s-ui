import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Tooltip,
  Badge,
} from "@mui/material";
import type { DashboardItemModel, Status } from "./DashboardItemModel";
import IconAvatar from "./IconAvatar";

const statusColor: Record<Status, 'success' | 'warning' | 'error' | 'default'> = {
  up: 'success',
  degraded: 'warning',
  down: 'error',
  unknown: 'default',
};


export default function DashboardIcon({
  title,
  description,
  icon,
  onClick,
  href,
  ariaLabel,
  onContextMenu,
  serviceStatus
}: DashboardItemModel) {
  const clickable = Boolean(onClick || href);

  const content = (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        alignItems: "flex-start",
      }}
    >
      <IconAvatar icon={icon} title={title} />
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Tooltip title={title} enterDelay={600}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>
        </Tooltip>
        {description ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              // WebkitLineClamp: 2,
              overflow: "hidden",
              minHeight: "2.6em",
            }}
            title={description}
          >
            {description}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );

  return (
    <Badge
      variant="dot"
      color={serviceStatus ? statusColor[serviceStatus] : 'warning'}
      overlap="rectangular"
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      sx={{
        display: 'block',
        '& .MuiBadge-badge': (theme) => ({
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          left: 8,
          top: 8
        }),
      }}
    >
      <Card
        variant="outlined"
        sx={{
          bgcolor: "background.paper",
          borderColor: "divider",
          "&:hover": clickable ? { boxShadow: 6, borderColor: "primary.main" } : undefined,
        }}
        onContextMenu={onContextMenu}
      >
        {clickable ? (
          <CardActionArea
            component={href ? "a" : "button"}
            href={href}
            onClick={onClick}
            sx={{ height: "100%", alignItems: "stretch" }}
            aria-label={ariaLabel ?? title}
          >
            <CardContent sx={{ p: 2.0 }}>
              {content}
            </CardContent>
          </CardActionArea>
        ) : (
          <CardContent sx={{ p: 2.0 }}>{content}</CardContent>
        )}
      </Card>
    </Badge>
  );
}

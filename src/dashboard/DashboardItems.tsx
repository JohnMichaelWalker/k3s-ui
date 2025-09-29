import Masonry from '@mui/lab/Masonry';
import DashboardIcon from './DashboardItem';
import type { DashboardItemModel } from './DashboardItemModel';
import ForestIcon from '@mui/icons-material/Forest';

const data : DashboardItemModel[] = [
  {
    title: 'grafana', 
    description: 'grafana dashboard for the cluster', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/330px-Grafana_logo.svg.png',
    href: "https://grafana.johnwalkers.com",
    serviceStatus: 'up'
  }, 
  {
    title: 'prometheus', 
    description: 'prometheus dashboard for the cluster',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png',
    href: "https://prometheus.johnwalkers.com",
    serviceStatus: 'up'
  }, 
  {
    title: 'baz', 
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.',
    onClick: () => alert("hoi"),
    serviceStatus: 'down'
  },
  {
    title: 'foooo', 
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    onClick: () => alert("hoi"),
    serviceStatus: 'down'
  },
  {
    title: 'garden', 
    description: 'A garden/plant monitoring service',
    icon: './garden_logo_64x64.png',
    href: "https://grafana.johnwalkers.com",
    serviceStatus: 'degraded'
  },
  {
    title: 'baz', 
    description: 'Lorem ipsum dolor sit',
    onClick: () => alert("hoi"),
    serviceStatus: 'down'
  },
]

export default () => {

  return (
    <div style={{ padding: 10 }}>
      <Masonry columns={3} spacing={2}>
        {data.map((item) => (
          <DashboardIcon
            {...item}
             />
        ))}
      </Masonry>
    </div>
  )
}
import ExplorerView from '@/view/ExplorerView.vue'
import DeployerView from '@/view/DeployerView.vue'

export default [
  {
    path: '/',
    component: DeployerView
  },
  {
    path: "/explorer",
    component: ExplorerView,
  },
  {
    path: "/deployer",
    component: DeployerView
  }
];
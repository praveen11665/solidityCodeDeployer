import ExplorerView from '@/view/ExplorerView.vue'
import DeployerView from '@/view/DeployerView.vue'

export default [
  {
    path: "/explorer",
    component: ExplorerView,
  },
  {
    path: "/deployer",
    component: DeployerView
  }
];
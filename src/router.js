import { createHashRouter } from 'react-router-dom'

import Layout from './components/Layout'
import Error from './pages/Error'
import Ranking from './pages/Ranking'
import Player from './pages/Player'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Ranking />,
      },
      {
        path: "players/:playerId",
        element: <Player />,
      },
    ]
  }
])

export default router

import dynamic from 'next/dynamic'

const ComponentMap = dynamic(() => import('./Map'), {
  ssr: false
})

export default ComponentMap

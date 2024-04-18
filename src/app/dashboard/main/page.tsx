import { SimpleWidgetGrid } from '@/components/simpleWidget/SimpleWidgetGrid';

export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

const MainPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <h4>Dashboard Information</h4>

      <hr />

      <SimpleWidgetGrid/>
    </>
  )
}

export default MainPage
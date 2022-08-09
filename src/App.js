import ExpandingCard from "./cmponents/ExpandingCard"

function App() {
  const images = [
    {
      id: "1",
      title: "Explore The World",
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      active: true,
    },
    {
      id: "2",
      title: "Wild Forest",
      url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      active: false,
    },
    {
      id: "3",
      title: "Sunny Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      active: false,
    },
    {
      id: "4",
      title: "City on Winter",
      url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      active: false,
    },
    {
      id: "5",
      title: "Mountains - Clouds",
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      active: false,
    },
  ]
  return (
    <div>
      <ExpandingCard data={images} />
    </div>
  )
}

export default App

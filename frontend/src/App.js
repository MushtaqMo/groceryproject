const App = () => {
    return (
        <div>
            <h1>hello world</h1>
        <Navbar />
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route 
                path='/addToCart'
                element={<addToCard/>}
            />
        </Routes>

        </div>

    )
}

export default App
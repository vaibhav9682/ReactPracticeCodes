// // let heading = document.createElement("h2")
// // heading.textContent = "Hello World"
// // heading.className = "header"

// // document.getElementById("root").append(heading)
// let reactHeading = React.createElement("h1", { className: "header", children: "hello react" })
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);



// Write your React code here

// let boll = True;

// let Name = () => (

//       <>
//            
//       </>
// )

function Name() {
      let boll = null;
      return (
            <>
                  <h1>
                        LETS LEARN JSX
                  </h1>
                  <p>
                        Color is {boll}
                  </p>
            </>
      )
}




ReactDOM.createRoot(document.getElementById("root")).render(<Name />)


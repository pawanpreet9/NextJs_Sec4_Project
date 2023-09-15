const { Fragment } = require("react");

function Layout(props){
  return (
    <Fragment>

      <main>
        {props.children}
      </main>
    </Fragment>
  )
}
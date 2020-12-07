import React from "react"
import { connect } from "react-redux";

const MainPage: React.FC = (props: any) => {

    console.log(props.ui.errors)

    return (
        <div>Página Inicial</div>
    );
}
 

const mapStateToProps = (state: any) => ({
    ui: state.ui,
    auth: state.auth
});
 
export default connect(mapStateToProps) (MainPage)
import React from "react"
import { connect } from "react-redux";

const MainPage: React.FC = (props: any) => {


    return (
        <div>Página Inicial</div>
    );
}
 

const mapStateToProps = (state: any) => ({
    ui: state.ui,
    auth: state.auth
});
 
export default connect(mapStateToProps) (MainPage)
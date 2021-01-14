import React from "react"
import ComponentPaper from '../../components/ComponentPaper'
import { Grid, Typography} from "@material-ui/core"


const DashboardPage: React.FC = (props: any) => {

    return (

        <Grid item xs={12} md={8} lg={12}>
            
            <ComponentPaper>
                <Typography variant="h2">
                    Welcome to Smart Data
                </Typography>
            </ComponentPaper>

        </Grid>
        
    )
}

export default DashboardPage
import React from "react"
import SmartDataPaper from '../../components/SmartDataPaper'
import { Grid, Typography} from "@material-ui/core"


const DashboardPage: React.FC = (props: any) => {

    return (

        <Grid item xs={12} md={8} lg={12}>
            
            <SmartDataPaper>
                <Typography variant="h2">
                    Welcome to Smart Data
                </Typography>
            </SmartDataPaper>

        </Grid>
        
    )
}

export default DashboardPage
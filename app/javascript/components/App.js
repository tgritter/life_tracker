import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Track from './Track'
import Tasks from './Tasks'
import Data from './Data'
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles/';

const customTheme = createMuiTheme({
    palette: {
        background: {
            paper: '#006494',
        },
        text: {
            primary: "#ffffff",
            secondary: "#00000"
        },
        primary: {
          main: '#fff',
        },
    },
})


class App extends React.Component {
    render () {
        return (
            <MuiThemeProvider theme={customTheme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Track} />
                            <Route exact path="/tasks" component={Tasks} />
                            <Route exact path="/data" component={Data} />
                        </Switch>
                    </div>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        )
    }
}

export default App
// src/App.tsx

import React from 'react';
import {Grid} from '@mui/material';
import ParametersPanel from './components/ParametersPanel';
import TextArea from './components/TextArea';
import TextOutputArea from './components/TextOutputArea';
import MetricsDisplay from './components/MetricsDisplay';

function App() {
    return (
        <div className="App">
            <Grid container spacing={2}>
                {/* Left Panel */}
                <Grid item xs={12} md={3}>
                    <ParametersPanel/>
                </Grid>

                {/* Middle Panel */}
                <Grid item xs={12} md={6}>
                    <TextArea/>
                    <TextOutputArea/>
                </Grid>

                {/* Right Panel */}
                <Grid item xs={12} md={3}>
                    <MetricsDisplay/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

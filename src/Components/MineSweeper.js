import React from "react";
import Grid from "@material-ui/core/Grid";
import Board from "./Board";

class MineSweeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mines: 10,
      cols: 10,
      rows: 10
    };
  }

  modeHandle(cols, rows, mines, cb) {
    this.setState({ cols, rows, mines }, cb);
  }

  render() {
    const { rows, cols, mines, flags } = this.state;
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <div>
            <Board
              rows={rows}
              cols={cols}
              mines={mines}
              flags={flags}
              modeHandle={this.modeHandle.bind(this)}
            />
          </div>
          <div style={{ marginLeft: 30 }}>
            <h2>Rules:</h2>
            <h3>General Information:</h3>
            <ol>
              <li>Click any box to start the game</li>
              <li>Click the top yellow face to restart</li>
            </ol>
            <h3>With Mouse:</h3>
            <ol>
              <li>Right Click to open the box</li>
              <li>Left Click to flag the box</li>
            </ol>
            <h3>Without Mouse:</h3>
            <ol>
              <li>Click to open the box</li>
              <li>Command + Click to flag the box</li>
            </ol>
          </div>
        </Grid>
      </div>
    );
  }
}

export default MineSweeper;

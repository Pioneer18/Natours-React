import React from 'react';

const gridTest = props => (
    <React.Fragment>
        <section className="grid-test">
            {/* Row 1 */}
            <div className="row">
                <div className="col-1-of-2">
                    col 1 of 2
                </div>
                <div className="col-1-of-2">
                    col 1 of 2
                </div>
            </div>

            {/* Row 2 */}
            <div className="row">
                <div className="col-1-of-3">
                    col 1 of 3
                </div>
                <div className="col-1-of-3">
                    col 1 of 3
                
                </div>
                <div className="col-1-of-3">
                    col 1 of 3
                
                </div>
            </div>

            {/* Row 3 */}
            <div className="row">
                <div className="col-1-of-3">
                    col 1 of 3
                </div>
                <div className="col-2-of-3">
                    col 2 of 3
                
                </div>
            </div>

            {/* Row 4 */}
            <div className="row">
                <div className="col-1-of-4">
                    col 1 of 4
                </div>
                <div className="col-1-of-4">
                    col 1 of 4
                
                </div>
                <div className="col-1-of-4">
                    col 1 of 4
                
                </div>
                <div className="col-1-of-4">
                    col 1 of 4
                
                </div>
            </div>

            {/* Row 5 */}
            <div className="row">
                <div className="col-1-of-4">
                    col 1 of 4
                </div>
                <div className="col-1-of-4">
                    col 1 of 4
                
                </div>
                <div className="col-2-of-4">
                    col 2 of 4
                
                </div>
            </div>

            {/* Row 6 */}
            <div className="row">
                <div className="col-1-of-4">
                    col 1 of 4
                </div>
                <div className="col-3-of-4">
                    col 3 of 4
                </div>
            </div>

        </section>
    </React.Fragment>
);

export default gridTest;
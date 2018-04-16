{this.state.musicForPlayer.map((dynamicData, key) =>
                            <li className="list-group-item">
                            <div className="row">
                            <div className="col">
                                <ReactAudioPlayer
                                    src={'http://127.0.0.1:8000' + dynamicData.music_for_player}
                                    controls
                                    volume="0"
                                />
                            </div>
                                <div className="col">{this.state.musicForPlayer.music_name}</div>
                            </div>
                        </li>
                        )}


                        <ul className="list-group list-group-flush">
                        {this.state.musicForPlayer.map((dynamicData, key) =>
                            <div>
                                <ReactAudioPlayer
                                    src={'http://127.0.0.1:8000' + dynamicData.music}
                                    controls
                                    volume="0"
                                />
                            </div>
                        )}

                    </ul>

<p>
                                    </p>
                                    <a href={'#'} className="Main-link-button">{dynamicData.music_name}</a>
                                    <p></p>
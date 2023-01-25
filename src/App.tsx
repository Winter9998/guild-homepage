import React, { useEffect, useRef } from 'react'
import bgVid from './bg2.mp4'
import TwitterImg from './twitter.svg'
import DiscordImg from './discord.svg'
import MirrorImg from './mirror.svg'
import CalendarImg from './calendar.svg'
import PatternImg from './patterns.jpeg'
import { BadgeIcon, ZodiacPaper } from 'zodiac-ui-components'
import ModuleList from './ModuleList'
import './App.css'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    videoRef.current!.playbackRate = 0.7
  }, [])

  return (
    <div className="container">
      <main className="main">
        <div className="vid-bg">
          <video
            ref={videoRef}
            playsInline
            autoPlay
            muted
            loop
            poster="firstFrame.jpg"
          >
            <source src={bgVid} type="video/mp4" />
          </video>
        </div>
        <section className="content">
          <ZodiacPaper
            style={{ padding: '1em' }}
            borderStyle="double"
            variant="elevation"
          >
            <section className="header">
              <div>
                <BadgeIcon icon="zodiac" size={200}></BadgeIcon>
              </div>

              <div className="guild-info">
                <ZodiacPaper
                  style={{ padding: '1em' }}
                  borderStyle="double"
                  variant="elevation"
                >
                  <ZodiacPaper
                    style={{
                      padding: '1em',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      rowGap: '1em',
                    }}
                    borderStyle="double"
                    variant="elevation"
                  >
                    <div className="tagline">
                      <ZodiacPaper
                        style={{ padding: '1em' }}
                        borderStyle="double"
                        variant="elevation"
                      >
                        <h2>Gnosis Guild</h2>
                        <p>
                          Society for interdependent software & keeper of the
                          Zodiac open standard
                        </p>
                      </ZodiacPaper>
                    </div>
                    <ZodiacPaper
                      style={{
                        padding: '1em',
                        display: 'flex',
                        columnGap: '1em',
                        rowGap: '1em',
                        flexWrap: 'wrap',
                      }}
                      borderStyle="double"
                      variant="elevation"
                    >
                      <ZodiacPaper
                        style={{ flexGrow: '1', minWidth: '80px' }}
                        borderStyle="double"
                        variant="elevation"
                      >
                        <a
                          className="social-link"
                          href="https://bit.ly/gnosisguilddiscord"
                        >
                          <img src={DiscordImg} />
                          <span>Discord</span>
                        </a>
                      </ZodiacPaper>
                      <ZodiacPaper
                        style={{ flexGrow: '1', minWidth: '80px' }}
                        borderStyle="double"
                        variant="elevation"
                      >
                        <a
                          className="social-link"
                          href="https://twitter.com/gnosisguild"
                        >
                          <img src={TwitterImg} />
                          <span>Twitter</span>
                        </a>
                      </ZodiacPaper>
                      <ZodiacPaper
                        style={{ flexGrow: '1', minWidth: '80px' }}
                        borderStyle="double"
                        variant="elevation"
                      >
                        <a
                          className="social-link"
                          href="https://gnosisguild.mirror.xyz/"
                        >
                          <img src={MirrorImg} />
                          <span>Blog</span>
                        </a>
                      </ZodiacPaper>
                      <ZodiacPaper
                        style={{ flexGrow: '1', minWidth: '80px' }}
                        borderStyle="double"
                        variant="elevation"
                      >
                        <a
                          className="social-link"
                          href="https://bit.ly/3CPpacx"
                        >
                          <img src={CalendarImg} />
                          <span>Calendar</span>
                        </a>
                      </ZodiacPaper>
                    </ZodiacPaper>
                  </ZodiacPaper>
                </ZodiacPaper>
              </div>
            </section>
            <section className="info-list">
              <ZodiacPaper
                style={{ padding: '1em', marginBottom: '1em' }}
                borderStyle="double"
              >
                <ZodiacPaper borderStyle="double">
                  <div className="wiki-info">
                    <div>
                      <a href="https://zodiac.wiki">
                        <h3>Zodiac Wiki</h3>
                      </a>
                      <p>
                        zodiac.wiki is a living resource for DAOs. The wiki
                        houses documentation, a library, and a pattern language
                        for organizations.
                      </p>
                      <figure className="viriditas">
                        <blockquote>
                          <p>
                            Glance at the sun. See the moon and the stars. Gaze
                            at the beauty of the Earth's greenings. Now, think.
                          </p>
                        </blockquote>
                        <figcaption>— Hildegard of Bingen</figcaption>
                      </figure>
                    </div>

                    <figure className="wiki-img">
                      <img src={PatternImg} />
                      <figcaption>
                        The Timeless Way of Building (1979)
                      </figcaption>
                    </figure>
                  </div>
                </ZodiacPaper>
              </ZodiacPaper>
              <ModuleList />
            </section>
          </ZodiacPaper>
        </section>
      </main>
    </div>
  )
}

export default App

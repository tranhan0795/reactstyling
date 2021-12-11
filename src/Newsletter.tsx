
import React from 'react'


function Newsletter() {
  const [email, setEmail] = React.useState<string>('')


  return (
    <section style={styles.container()}>
      <div style={styles.spectrum()} aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <div style={styles.bar({ i })} key={i}></div>
        ))}
      </div>
      <header style={styles.header()}>
        <h2 style={styles.headerH2()}>Get the newsletter</h2>
      </header>
      <input
        style={styles.email()}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}

      />
      <button style={styles.submit()}>Sign up</button>
    </section>
  )
}

export default Newsletter

const color = [
  '#ff598a',
  '#de56e8',
  '#b36bff',
  '#5b56e8',
  '#5e9fff',
]


const styles = {
  container: (): React.CSSProperties => ({
    position: 'relative',
    maxWidth: '100%',
    fontSize:  '1.25em',
    padding: '1em 1em 2em 1em',
    background: '#2b283d',
  })
  ,
  spectrum: (): React.CSSProperties => ({
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    pointerEvents: 'none',
  }),
  bar: ({  i }: {  i: number }): React.CSSProperties => ({
    height: '0.5em',
    width: '20%',
    transformOrigin: 'bottom',
    transition: 'all 1s',
    background: color[i],
  }),
  header: (): React.CSSProperties => ({
    position: 'relative',
    color: 'white',
    zIndex: '1',
    textTransform: 'uppercase',
    fontSize: '0.85em',
    textShadow: '0 3px 2px #000',
  }),
  headerH2: (): React.CSSProperties => ({
    margin: '0 0 0.5em 0',
  }),
  email: (): React.CSSProperties => ({
    position: 'relative',
    height: '2em',
    lineHeight: '2em',
    fontSize: '0.85em',
    padding: '0 0.5em',
    width: '100%',
    margin: '0.15em',
    border: '1px solid black',
    color: 'inherit',
    background: 'inherit',
    textAlign: 'inherit',
    outlineOffset: '0.15em',
    outline:  'none',
  }),
  submit: (): React.CSSProperties => ({
    position: 'absolute',
    left: '50%',
    bottom: '0',
    overflow: 'hidden',
    padding: '0',
    margin: '0',
    background: 'transparent',
    border: '0',
    borderBottom: 0,
    textTransform: 'uppercase',
    transition: 'all 300ms',
    fontSize: '0',
    zIndex: '1',
    color: '#070222',
    fontWeight: 'bold',
    cursor: 'pointer',
    outlineOffset: '4px',
    outline: 'none',
  }),
}

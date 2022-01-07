
import React from 'react'

function Newsletter() {
  const [email, setEmail] = React.useState<string>('')
  const [emailFocused, setEmailFocused] = React.useState<boolean>(false);
  const { width } = useWindowDimensions();
  const emailPartsCount = countEmailParts(email)
  const [submitHovered, setSubmitHovered] = React.useState<boolean>(false)

  return (
    <section style={styles.container(width)}>
      <div style={styles.spectrum()} aria-hidden>
        {colors.map((_, i) => (
          <div style={styles.bar({ active: i + 1 <= emailPartsCount, i })} key={i}></div>
        ))}
      </div>
      <header style={styles.header()}>
        <h2 style={styles.headerH2()}>Get the newsletter</h2>
      </header>
      <input
        style={styles.email({ focused: emailFocused })}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />
      <button
        style={styles.submit({
          active: emailPartsCount >= 5,
          hovered: submitHovered
        })}
        onFocus={() => setSubmitHovered(true)}
        onBlur={() => setSubmitHovered(false)}
        onMouseOver={() => setSubmitHovered(true)}
        onMouseOut={() => setSubmitHovered(false)}
      >
        Sign up
      </button>
    </section>
  )
}

export default Newsletter

const colors = [
  '#ff598a',
  '#de56e8',
  '#b36bff',
  '#5b56e8',
  '#5e9fff',
]


const styles = {
  container: (width: number): React.CSSProperties => ({
    position: 'relative',
    maxWidth: width >= 800 ? '700' : '100%',
    fontSize: width >= 800 ? '2em' : '1.25em',
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
  bar: ({ active, i }: { active: boolean, i: number }): React.CSSProperties => ({
    height: active ? '100%' : '0.5em',
    width: '20%',
    transformOrigin: 'bottom',
    transition: 'all 1s',
    background: colors[i],
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
  email: ({ focused }: { focused: boolean }): React.CSSProperties => ({
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
    outline: focused ? '2px solid #fff' : 'none',
  }),
  submit: ({ active, hovered }: { active: boolean, hovered: boolean }): React.CSSProperties => ({
    position: 'absolute',
    left: '50%',
    transform: hovered
      ? 'translate(-50%, 50%) rotate(0deg) scale(1.2)'
      : active
        ? 'translate(-50%, 50%) rotate(-5deg)'
        : 'translateX(-50%) rotate(0deg)',
    bottom: '0',
    height: active ? 'auto' : '0',
    width: active ? 'auto' : '0',
    overflow: 'hidden',
    padding: active ? '0.25em 1em' : '0',
    margin: '0',
    background: active ? '#fff' : 'transparent',
    border: '0',
    borderBottom: hovered
      ? `3px solid ${colors[0]}`
      : active
        ? `3px solid ${colors[5]}`
        : 0,
    textTransform: 'uppercase',
    transition: 'all 300ms',
    fontSize: active ? '1em' : '0',
    zIndex: '1',
    color: '#070222',
    fontWeight: 'bold',
    cursor: 'pointer',
    outlineOffset: '4px',
    outline: hovered ? '2px solid #fff' : 'none'
  })
}

function countEmailParts(email: string) {
  if (/@.+\..{2,}$/.test(email)) {
    return 5
  } else if (/@.+\..?$/.test(email)) {
    return 4
  } else if (/@.+$/.test(email)) {
    return 3
  } else if (/@/.test(email)) {
    return 2
  } else if (/.+/.test(email)) {
    return 1
  } else {
    return 0
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState<{ width: number }>({ width: window.innerWidth });

  function handleResize() {
    setWindowDimensions({ width: window.innerWidth });
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  return windowDimensions;

}

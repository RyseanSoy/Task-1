
import Image from 'next/image'
// app/page.tsx
export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow"></p>
      <h1>Home</h1>
      <p className="description">
        
      </p>

      <div className="card">
        <h2>Welcome!</h2>
        <p>Welcome to the app.</p>
      </div>
      <img  
        src="https://TuDublin-1-1.b-cdn.net/beastie.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <img  
        src="https://TuDublin-1-1.b-cdn.net/tux.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />

    </section>
  );
}

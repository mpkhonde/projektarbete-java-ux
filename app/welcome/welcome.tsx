

export function Welcome() {
  return (
    <div className="background">
      <div className="container">
        <div className="green-box"></div>

        <div style={{ position: "absolute", left: 49, top: 54 }} className="mars">
          MARS
        </div>
        <div className="box" style={{ left: 49, top: 138 }}></div>
        <div className="box" style={{ left: 49, top: 349, height: 238 }}></div>

        <div style={{ position: "absolute", left: 62, top: 156 }} className="text">
          Den här månaden har du tjänat
        </div>
        <div style={{ position: "absolute", left: 62, top: 179 }} className="belopp">
          31 569 kr
        </div>
        <div style={{ position: "absolute", left: 62, top: 353 }} className="text">
          Händelser
        </div>

        <div className="button" style={{ left: 78, top: 677 }}>
          Ge mig spartips!
        </div>

        <div style={{ position: "absolute", left: 55, top: 802 }} className="inkomst">
          INKOMST
        </div>
        <div style={{ position: "absolute", left: 273, top: 802 }} className="utgift">
          UTGIFT
        </div>

        <div className="box" style={{ width: 98, height: 45, left: 49, top: 282 }}></div>
        <div style={{ position: "absolute", left: 52, top: 290 }} className="text">
          Min budget
        </div>

        <div className="box" style={{ width: 98, height: 45, left: 226, top: 282 }}></div>
        <div style={{ position: "absolute", left: 245, top: 290 }} className="text">
          Historik
        </div>
      </div>
    </div>
  );
}

    

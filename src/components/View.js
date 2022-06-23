import { Canvas } from "@react-three/fiber";
import Navbar from "./Navbar"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";

function Model1() {
  const { scene } = useGLTF("P1.glb");
  return <primitive object={scene} />;
}
function Model2() {
  const { scene } = useGLTF("P2.glb");
  return <primitive object={scene} />;
}
function Model3() {
  const { scene } = useGLTF("P3.glb");
  return <primitive object={scene} />;
}
function Model4() {
  const { scene } = useGLTF("P4.glb");
  return <primitive object={scene} />;
}
function Model5() {
  const { scene } = useGLTF("P6.glb");
  return <primitive object={scene} />;
}
function Model6() {
  const { scene } = useGLTF("P7.glb");
  return <primitive object={scene} />;
}
function Model7() {
  const { scene } = useGLTF("P8.glb");
  return <primitive object={scene} />;
}
function Model8() {
  const { scene } = useGLTF("P9.glb");
  return <primitive object={scene} />;
}
function Model9() {
  const { scene } = useGLTF("P12.glb");
  return <primitive object={scene} />;
}
function Model10() {
  const { scene } = useGLTF("P13.glb");
  return <primitive object={scene} />;
}
function Model11() {
  const { scene } = useGLTF("P17.glb");
  return <primitive object={scene} />;
}
function Model12() {
  const { scene } = useGLTF("P18.glb");
  return <primitive object={scene} />;
}

function View(props) {
  return (
    <>
    <Navbar/>
      <div className="container">
        <section className="flex" style={{ display: "flex" }}>
          <div className="two">
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.02]} maxPolarAngle={2.5} />
              <PerspectiveCamera makeDefault fov={5} position={[3, 2, 5]} />
              <ambientLight />
              <pointLight position={[10, 10, 15]} intensity={1.2} />
              <Model1 />
            </Canvas>
          </div>

          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model2 />
            </Canvas>
          </div>
          </div>
          <div className="two">
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <Model3 />
            </Canvas>
          </div>
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model4 />
            </Canvas>
          </div>
          </div>
        </section>
        <section className="flex" style={{ display: "flex" }}>
          <div className="two">
          <div >
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <Model5 />
            </Canvas>
          </div>
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model6 />
            </Canvas>
          </div>
          </div>
          <div className="two">
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model7 />
            </Canvas>
          </div>
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model8 />
            </Canvas>
          </div>
          </div>
        </section>
        <section className="flex" style={{ display: "flex" }}>
          <div className="two">
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model9 />
            </Canvas>
          </div>
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model10 />
            </Canvas>
          </div>
          </div>
          <div className="two">
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model11 />
            </Canvas>
          </div>
          <div>
            <Canvas camera={{ position: [20, 20, 50], fov: 0.5 }}>
              <OrbitControls target={[0.02, 0.05, 0.01]} maxPolarAngle={2.5} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} intensity={1.3} />
              <Model12 />
            </Canvas>
          </div>
          </div>
        </section>
        <Link to={"/"} className="btn">
          back to home page
        </Link>
      </div>
    </>
  );
}
export default View;

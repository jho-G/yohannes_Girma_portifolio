(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/backgrounds/NeuralCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NeuralCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PRIMARY_RGB = "56, 189, 248";
const MOBILE_BREAKPOINT = 768;
const NODE_COUNT_MOBILE = 35;
const NODE_COUNT_DESKTOP = 100;
const LINK_DISTANCE = 200;
const REPULSE_RADIUS = 250;
const REPULSE_STRENGTH = 0.6;
const REPEL_DAMPING = 0.9;
const PULSE_SPEED_MIN = 0.006;
const PULSE_SPEED_MAX = 0.014;
const PULSE_SPAWN_MIN_MS = 900;
const PULSE_SPAWN_MAX_MS = 2200;
function NeuralCanvas({ className }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            let width = 0;
            let height = 0;
            let nodes = [];
            let edges = [];
            let pulses = [];
            let frameId = 0;
            let running = true;
            let nextPulseAt = 0;
            const pointer = {
                x: -9999,
                y: -9999,
                active: false
            };
            const nodeCountFor = {
                "NeuralCanvas.useEffect.nodeCountFor": (w)=>w < MOBILE_BREAKPOINT ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP
            }["NeuralCanvas.useEffect.nodeCountFor"];
            const createNodes = {
                "NeuralCanvas.useEffect.createNodes": (count)=>Array.from({
                        length: count
                    }, {
                        "NeuralCanvas.useEffect.createNodes": ()=>({
                                x: Math.random() * width,
                                y: Math.random() * height,
                                driftVx: (Math.random() - 0.5) * 0.25,
                                driftVy: (Math.random() - 0.5) * 0.25,
                                repelVx: 0,
                                repelVy: 0,
                                radius: Math.random() * 1.2 + 1
                            })
                    }["NeuralCanvas.useEffect.createNodes"])
            }["NeuralCanvas.useEffect.createNodes"];
            const resize = {
                "NeuralCanvas.useEffect.resize": ()=>{
                    width = canvas.clientWidth;
                    height = canvas.clientHeight;
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    const count = nodeCountFor(width);
                    if (nodes.length !== count) {
                        nodes = createNodes(count);
                    }
                }
            }["NeuralCanvas.useEffect.resize"];
            const setPointerFromEvent = {
                "NeuralCanvas.useEffect.setPointerFromEvent": (clientX, clientY)=>{
                    const rect = canvas.getBoundingClientRect();
                    pointer.x = clientX - rect.left;
                    pointer.y = clientY - rect.top;
                    pointer.active = true;
                }
            }["NeuralCanvas.useEffect.setPointerFromEvent"];
            const handleMouseMove = {
                "NeuralCanvas.useEffect.handleMouseMove": (event)=>{
                    setPointerFromEvent(event.clientX, event.clientY);
                }
            }["NeuralCanvas.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "NeuralCanvas.useEffect.handleTouchMove": (event)=>{
                    const touch = event.touches[0];
                    if (!touch) return;
                    setPointerFromEvent(touch.clientX, touch.clientY);
                }
            }["NeuralCanvas.useEffect.handleTouchMove"];
            const clearPointer = {
                "NeuralCanvas.useEffect.clearPointer": ()=>{
                    pointer.active = false;
                    pointer.x = -9999;
                    pointer.y = -9999;
                }
            }["NeuralCanvas.useEffect.clearPointer"];
            const maybeSpawnPulse = {
                "NeuralCanvas.useEffect.maybeSpawnPulse": (timestamp)=>{
                    if (timestamp < nextPulseAt || edges.length === 0) return;
                    const [a, b] = edges[Math.floor(Math.random() * edges.length)];
                    pulses.push({
                        a,
                        b,
                        t: 0,
                        speed: PULSE_SPEED_MIN + Math.random() * (PULSE_SPEED_MAX - PULSE_SPEED_MIN)
                    });
                    nextPulseAt = timestamp + PULSE_SPAWN_MIN_MS + Math.random() * (PULSE_SPAWN_MAX_MS - PULSE_SPAWN_MIN_MS);
                }
            }["NeuralCanvas.useEffect.maybeSpawnPulse"];
            const drawFrame = {
                "NeuralCanvas.useEffect.drawFrame": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    edges = [];
                    for(let i = 0; i < nodes.length; i++){
                        for(let j = i + 1; j < nodes.length; j++){
                            const a = nodes[i];
                            const b = nodes[j];
                            const dx = a.x - b.x;
                            const dy = a.y - b.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance < LINK_DISTANCE) {
                                edges.push([
                                    a,
                                    b
                                ]);
                                ctx.beginPath();
                                ctx.moveTo(a.x, a.y);
                                ctx.lineTo(b.x, b.y);
                                ctx.strokeStyle = `rgba(${PRIMARY_RGB}, ${0.16 * (1 - distance / LINK_DISTANCE)})`;
                                ctx.lineWidth = 1;
                                ctx.stroke();
                            }
                        }
                    }
                    for (const node of nodes){
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${PRIMARY_RGB}, 0.55)`;
                        ctx.fill();
                    }
                    for (const pulse of pulses){
                        const x = pulse.a.x + (pulse.b.x - pulse.a.x) * pulse.t;
                        const y = pulse.a.y + (pulse.b.y - pulse.a.y) * pulse.t;
                        const fade = Math.sin(pulse.t * Math.PI);
                        ctx.beginPath();
                        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${PRIMARY_RGB}, ${0.9 * fade})`;
                        ctx.shadowColor = `rgba(${PRIMARY_RGB}, ${0.8 * fade})`;
                        ctx.shadowBlur = 8;
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                }
            }["NeuralCanvas.useEffect.drawFrame"];
            const step = {
                "NeuralCanvas.useEffect.step": (timestamp)=>{
                    if (!running) return;
                    for (const node of nodes){
                        if (pointer.active) {
                            const dx = node.x - pointer.x;
                            const dy = node.y - pointer.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance < REPULSE_RADIUS && distance > 0.001) {
                                const force = (1 - distance / REPULSE_RADIUS) * REPULSE_STRENGTH;
                                node.repelVx += dx / distance * force;
                                node.repelVy += dy / distance * force;
                            }
                        }
                        node.repelVx *= REPEL_DAMPING;
                        node.repelVy *= REPEL_DAMPING;
                        node.x += node.driftVx + node.repelVx;
                        node.y += node.driftVy + node.repelVy;
                        if (node.x < 0 || node.x > width) node.driftVx *= -1;
                        if (node.y < 0 || node.y > height) node.driftVy *= -1;
                        node.x = Math.min(Math.max(node.x, 0), width);
                        node.y = Math.min(Math.max(node.y, 0), height);
                    }
                    pulses = pulses.filter({
                        "NeuralCanvas.useEffect.step": (pulse)=>{
                            pulse.t += pulse.speed;
                            return pulse.t < 1;
                        }
                    }["NeuralCanvas.useEffect.step"]);
                    maybeSpawnPulse(timestamp);
                    drawFrame();
                    frameId = requestAnimationFrame(step);
                }
            }["NeuralCanvas.useEffect.step"];
            const handleVisibility = {
                "NeuralCanvas.useEffect.handleVisibility": ()=>{
                    if (document.hidden) {
                        running = false;
                        cancelAnimationFrame(frameId);
                    } else if (!prefersReducedMotion) {
                        running = true;
                        frameId = requestAnimationFrame(step);
                    }
                }
            }["NeuralCanvas.useEffect.handleVisibility"];
            resize();
            drawFrame();
            if (!prefersReducedMotion) {
                frameId = requestAnimationFrame(step);
            }
            window.addEventListener("resize", resize);
            window.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
            window.addEventListener("touchmove", handleTouchMove, {
                passive: true
            });
            window.addEventListener("mouseleave", clearPointer);
            window.addEventListener("touchend", clearPointer);
            document.addEventListener("visibilitychange", handleVisibility);
            return ({
                "NeuralCanvas.useEffect": ()=>{
                    running = false;
                    cancelAnimationFrame(frameId);
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("touchmove", handleTouchMove);
                    window.removeEventListener("mouseleave", clearPointer);
                    window.removeEventListener("touchend", clearPointer);
                    document.removeEventListener("visibilitychange", handleVisibility);
                }
            })["NeuralCanvas.useEffect"];
        }
    }["NeuralCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        "aria-hidden": true,
        className: className,
        style: {
            willChange: "transform",
            pointerEvents: "auto"
        }
    }, void 0, false, {
        fileName: "[project]/components/backgrounds/NeuralCanvas.tsx",
        lineNumber: 250,
        columnNumber: 5
    }, this);
}
_s(NeuralCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = NeuralCanvas;
var _c;
__turbopack_context__.k.register(_c, "NeuralCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/backgrounds/NeuralCanvas.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/backgrounds/NeuralCanvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_backgrounds_NeuralCanvas_tsx_08y4hj0._.js.map
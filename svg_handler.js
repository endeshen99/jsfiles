

//paper.install(window);

var meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('content', 'width=device-width');
document.getElementsByTagName('head')[0].appendChild(meta);

var faceDetection = null;
var paper_already_setup = false;
var canvasWidth;
var canvasHeight;

var canvasScope;
var svgScope;

var skeleton;

var svg = document.getElementById("Layer_1");
svg.parentNode.removeChild(svg);

var illustration;
var poses_new;
var faces_new;

async function setupPaper() {
  if (!paper_already_setup) {
    window.webkit.messageHandlers.callback.postMessage("Installing paper...");
    svgScope = await SVGUtils.importSVG(svg);
    skeleton = new Skeleton(svgScope);

    var canvas = document.getElementById("_canvas");
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  
    canvasScope = new paper.PaperScope();
    canvasScope.activate()
    canvasScope.setup(canvas)
    
    illustration = new PoseIllustration(canvasScope);
    illustration.bindSkeleton(skeleton, svgScope);
    paper_already_setup = true;
    window.webkit.messageHandlers.callback.postMessage("Installed paper.");
  }
}


function drawAnimatedPerson(poses, faces) {
  window.webkit.messageHandlers.callback.postMessage("Drawing...");
  poses_new = poses;
  faces_new = faces;
  canvasScope.project.clear();
  if (Object.keys(faces).length != 0) {
    face = Skeleton.toFaceFrame(faces);
  } else {
    face = null;
  }
  illustration.updateSkeleton(poses, face);
  illustration.draw(canvasScope, canvasWidth, canvasHeight);
  canvasScope.project.activeLayer.scale(1, 1, new canvasScope.Point(0, 0));
  window.webkit.messageHandlers.callback.postMessage("Drawing Done.");
}

window.webkit.messageHandlers.callback.postMessage("handler loaded");

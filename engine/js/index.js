// Copyright 2023 the .NET Foundation
// Licensed under the MIT License

// The toplevel WorldWide Telescope WebGL engine API module.
//
// To maintain compatibility with a *lot* of legacy code, we export way more
// types and interfaces than we would if we were starting from scratch. So it
// goes.

export { ss } from "./ss";

export {
    CalD,
    DAY_OF_WEEK,
    DT,
} from "./astrocalc/date.js";

export {
    COR,
    C3D,
    CT,
} from "./astrocalc/coordinate_transformation.js";

export { CAAEarth, VSC, } from "./astrocalc/earth.js";
export { CAAFK5 } from "./astrocalc/fk5.js";
export { NUC, CAANutation } from "./astrocalc/fk5.js";
export { CAASun } from "./astrocalc/sun.js";
export { CAAMercury } from "./astrocalc/mercury.js";
export { CAAVenus } from "./astrocalc/venus.js";
export { CAAMars } from "./astrocalc/mars.js";
export { CAAJupiter } from "./astrocalc/jupiter.js";
export { CAASaturn } from "./astrocalc/saturn.js";

export {
    EOE,
    EPD,
    EOD,
    EO,
    ELL,
} from "./astrocalc/elliptical.js";

export {
    ScaleTypes,
    URLRewriteMode,
    SolarSystemObjects,
    InterpolationType,
    PointType,
    LocationHint,
    FolderGroup,
    FolderRefreshType,
    FolderType,
    ThumbnailSize,
    CullMode,
    PointScaleTypes,
    ProjectionType,
    ImageSetType,
    BandPass,
    Classification,
    DataTypes,
    AltUnits,
    FadeType,
    ReferenceFrames,
    ReferenceFrameTypes,
    CoordinatesTypes,
    AltTypes,
    MarkerMixes,
    ColorMaps,
    PlotTypes,
    MarkerScales,
    RAUnits,
    Primitives,
    Alignment,
    StockSkyOverlayTypes,
    OverlayAnchor,
    AudioType,
    ShapeType,
    LoopTypes,
    SelectionAnchor,
    TextBorderStyle,
    UserLevel,
    TransitionType,
    Keys,
    DialogResult,
    Formatting,
    StateType,
    IThumbnail,
    IPlace,
    IUiController,
    IViewMover,
    IUIServicesCallbacks,
    ISettings,
    IUndoStep,
    GFX,
    ABR,
    ACFT,
    ASEP,
    DYT,
    CAAEclipticalElementDetails,
    CAAEclipticalElements,
    EPO,
    EOT,
    GMD,
    GMDS,
    GM,
    CAAGlobe,
    IFR,
    INTP,
    CAAKepler,
    CAAMoon,
    MoonCoefficient1,
    MoonCoefficient2,
    MIFR,
    CAAMoonNodes,
    CAAMoonPerigeeApogee,
    MPAC,
    CAAMoonPhases,
    CAANeptune,
    CAATopocentricEclipticDetails,
    CAAParallax,
    CAAPhysicalJupiterDetails,
    CAAPhysicalJupiter,
    CAAPhysicalMarsDetails,
    CAAPhysicalMars,
    CAAPhysicalSunDetails,
    CAAPhysicalSun,
    CAAPluto,
    PlutoCoefficient1,
    PlutoCoefficient2,
    CAAPrecession,
    CAARiseTransitSetDetails,
    CAARiseTransitSet,
    CAASaturnRingDetails,
    CAASaturnRings,
    CAASidereal,
    CAAStellarMagnitudes,
    CAAUranus,
    VideoOutputType,
    FitsProperties,
    HipsProperties,
    FastMath,
    HealpixTables,
    Xyf,
    HealpixUtils,
    Hploc,
    Pointing,
    URLHelpers,
    Annotation,
    AstroRaDec,
    RiseSetDetails,
    AstroCalc,
    BlendState,
    CameraParameters,
    Color,
    Colors,
    Constellations,
    Lineset,
    Linepoint,
    ConstellationFilter,
    PositionTexture,
    PositionColoredTextured,
    PositionColored,
    PositionNormalTexturedTangent,
    Vector3d,
    Vector2d,
    Matrix3d,
    Matrix2d,
    DoubleUtilities,
    PlaneD,
    Vector4d,
    PositionNormalTexturedX2,
    PositionNormalTextured,
    SphereHull,
    ConvexHull,
    Folder,
    FolderBrowser,
    FolderUp,
    ShortIndexBuffer,
    IndexBuffer,
    VertexBufferBase,
    Dates,
    SimpleLineList,
    OrbitLineList,
    LineList,
    TriangleList,
    TriangleFanList,
    PointList,
    TimeSeriesLineVertex,
    TimeSeriesPointVertex,
    SimpleLineShader,
    SimpleLineShader2D,
    OrbitLineShader,
    LineShaderNormalDates,
    TimeSeriesPointSpriteShader,
    KeplerPointSpriteShader,
    EllipseShader,
    ModelShader,
    ModelShaderTan,
    TileShader,
    FitsShader,
    ImageShader,
    ImageShader2,
    SpriteShader,
    ShapeSpriteShader,
    TextShader,
    Tessellator,
    Texture,
    Grids,
    Imageset,
    ViewMoverKenBurnsStyle,
    KeplerVertex,
    ScaleMap,
    ColorMapContainer,
    Layer,
    DomainValue,
    LayerManager,
    LayerMap,
    SkyOverlays,
    GroundOverlayLayer,
    FrameTarget,
    LayerUI,
    LayerUIMenuItem,
    LayerUITreeNode,
    Group,
    Mesh,
    Object3d,
    ObjectNode,
    Orbit,
    EllipseRenderer,
    ReferenceFrame,
    KmlCoordinate,
    KmlLineList,
    PushPin,
    Table,
    VoTable,
    VoRow,
    VoColumn,
    WcsImage,
    Place,
    KeplerianElements,
    BodyAngles,
    Planets,
    Material,
    InViewReturnMessage,
    RenderContext,
    RenderTriangle,
    ScriptInterface,
    Settings,
    Text3dBatch,
    GlyphItem,
    GlyphCache,
    Text3d,
    SpaceTimeController,
    Star,
    Galaxy,
    LatLngEdges,
    Tile,
    Tour,
    FileEntry,
    FileCabinet,
    SettingParameter,
    Overlay,
    Selection,
    TextObject,
    TourDocument,
    TourEditTab,
    TourEditor,
    OverlayList,
    TourEdit,
    SoundEditor,
    TourStopList,
    TimeLine,
    TourPlayer,
    MasterTime,
    TourStop,
    LayerInfo,
    UndoTourStopChange,
    Undo,
    UndoStep,
    UndoTourSlidelistChange,
    UndoTourPropertiesChange,
    UiTools,
    Util,
    Rectangle,
    Guid,
    Mouse,
    Language,
    Cursor,
    Cursors,
    SelectLink,
    PopupVolume,
    PopupColorPicker,
    OverlayProperties,
    BinaryReader,
    Bitmap,
    ColorPicker,
    ContextMenuStrip,
    ToolStripMenuItem,
    TagMe,
    Dialog,
    Histogram,
    SimpleInput,
    XmlTextWriter,
    VizLayer,
    DataItem,
    WebFile,
    FolderDownloadAction,
    Wtml,
    WWTControl,
    WWTControlBuilder,
    WWTElementEvent,
    Coordinates,
    Fxyf,
    HealpixTile,
    FitsImage,
    Circle,
    Poly,
    PolyLine,
    EquirectangularTile,
    PositionVertexBuffer,
    PositionNormalTexturedVertexBuffer,
    PositionNormalTexturedTangentVertexBuffer,
    ScaleLinear,
    ScaleLog,
    ScalePow,
    ScaleSqrt,
    HistogramEqualization,
    GreatCirlceRouteLayer,
    GridLayer,
    ImageSetLayer,
    Object3dLayer,
    Object3dLayerUI,
    OrbitLayer,
    OrbitLayerUI,
    SpreadSheetLayer,
    TimeSeriesLayer,
    VoTableLayer,
    MercatorTile,
    PlotTile,
    TangentTile,
    ToastTile,
    BitmapOverlay,
    TextOverlay,
    ShapeOverlay,
    AudioOverlay,
    FlipbookOverlay,
    ToolStripSeparator,
    FrameWizard,
    ReferenceFrameProps,
    GreatCircleDialog,
    DataVizWizard,
    FitsImageTile,
    FitsImageJs,
    ISSLayer,
    CatalogSpreadSheetLayer,
    SlideChangedEventArgs,
    ArrivedEventArgs,
    AnnotationClickEventArgs,
    CollectionLoadedEventArgs,
    SkyImageTile,
} from "./transpiled.js";

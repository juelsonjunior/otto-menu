declare module "embla-carousel-autoplay" {
  import { EmblaPluginType } from "embla-carousel";
  interface AutoplayOptions {
    delay?: number;
    stopOnInteraction?: boolean;
    rootNode?: HTMLElement;
    active?: boolean;
    breakpoints?: Record<string, Partial<AutoplayOptions>>;
  }
  function Autoplay(options?: AutoplayOptions): EmblaPluginType;
  export default Autoplay;
}

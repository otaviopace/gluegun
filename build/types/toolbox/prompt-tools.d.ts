import { GluegunPrompt } from './prompt-types';
/**
 * We're replicating the interface of Enquirer in order to
 * "lazy load" the package only if and when we actually are asked for it.
 * This results in a significant speed increase.
 */
declare const prompt: {
    confirm: (message: string, initial?: boolean) => Promise<boolean>;
    ask: (questions: any) => Promise<any>;
    separator: () => any;
};
export { prompt, GluegunPrompt };

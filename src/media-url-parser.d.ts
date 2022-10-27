export default mediaUrlParser;
export type MediaUrlParserReturn = {
    /**
     * - a cleaned up version of the input URL
     */
    url: string;
    /**
     * - name of the provider
     */
    provider: string;
    /**
     * - the external provider ID
     */
    id: string;
};
/**
 * @typedef {Object} MediaUrlParserReturn
 * @property {string} url - a cleaned up version of the input URL
 * @property {string} provider - name of the provider
 * @property {string} id - the external provider ID
 */
/**
 * The URL parser, will find known providers and return media/provider info from this URL
 * @param {string} inputUrl
 * @returns {MediaUrlParserReturn}
 */
export function mediaUrlParser(inputUrl: string): MediaUrlParserReturn;

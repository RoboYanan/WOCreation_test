//% icon="\uf26c"
//% color="255" weight="90" block="WOCreation"
namespace WOCreation {

    /**
     * 初始化i2c OLED显示器
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
    //% weight=100
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
    export function init(height: number = 64, width: number = 128): void {
        return;
    }
}
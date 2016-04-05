/**
 * Created by a9jr5626 on 4/4/16.
 */

UI.registerHelper("money", function (amount) {
    return accounting.formatMoney(amount);
});

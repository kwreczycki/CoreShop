/**
 * CoreShop
 *
 * LICENSE
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2015-2016 Dominik Pfaffenbauer (https://www.pfaffenbauer.at)
 * @license    https://www.coreshop.org/license     GNU General Public License version 3 (GPLv3)
 */

pimcore.registerNS('pimcore.plugin.coreshop.mail.rules.condition');

pimcore.plugin.coreshop.mail.rules.condition = Class.create(pimcore.plugin.coreshop.rules.condition, {

    coreConditions: ['payment','carriers','orderState','invoiceState','shipmentState'],

    getConditionStyleClass: function(condition) {
        if(!Ext.Array.contains(this.coreConditions, condition)) {
            return 'coreshop_rule_icon_condition_externalEvent';
        }
        return 'coreshop_rule_icon_condition_' + condition;
    },

    getConditionClassNamespace : function() {
        return pimcore.plugin.coreshop.mail.rules.conditions;
    }
});
<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* __string_template__c6bfd69c715f6df326a4ab032efcaf8681e8b0b81dabd6a64f892cd497ebdb30 */
class __TwigTemplate_6ab055609e18114a65eee242e8ee8b911f1858c2dc0adb21389b343a445403bd extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 2
        echo "              <div id=\"ckeditor-ui-new-color-panel\">
                  <div class=\"form-item\">
                      <label for=\"hex\" class=\"form-item__label\">Kleur</label>
                      <input id=\"hex\" type=\"color\" maxlength=\"7\" required name=\"hex\" placeholder=\"#18515E\" class=\"form-text form-element form-element--type-text form-element--api-textfield\"/>
                  </div>
                  <div class=\"form-item\">
                      <label for=\"hex\" class=\"form-item__label\">Naam</label>
                      <input id=\"color-label\" type=\"text\" maxlength=\"15\" placeholder=\"Color label\"  class=\"form-text form-element form-element--type-text form-element--api-textfield\">
                  </div>
                  <div class=\"form-item\">
                    <label class=\"form-item__label form-submit-label\">&nbsp;</label>
                    <div class=\"editor-element-extra-margin button button--success js-form-submit form-submit\">Toevoegen</div>
                  </div>
              </div>
            ";
    }

    public function getTemplateName()
    {
        return "__string_template__c6bfd69c715f6df326a4ab032efcaf8681e8b0b81dabd6a64f892cd497ebdb30";
    }

    public function getDebugInfo()
    {
        return array (  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("", "__string_template__c6bfd69c715f6df326a4ab032efcaf8681e8b0b81dabd6a64f892cd497ebdb30", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}

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

/* __string_template__f5584b05ec1a94db3aea767985ae7b6e13e4fb256f7806a2a1a41707aa47c25b */
class __TwigTemplate_a360bbc847907b77cdc148ba343fd3ccbf9451a130efb594f27328bbbe24d90d extends \Twig\Template
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
                      <label for=\"hex\" class=\"form-item__label\">Color</label>
                      <input id=\"hex\" type=\"color\" maxlength=\"7\" required name=\"hex\" placeholder=\"#18515E\" class=\"form-text form-element form-element--type-text form-element--api-textfield\"/>
                  </div>
                  <div class=\"form-item\">
                      <label for=\"hex\" class=\"form-item__label\">Name</label>
                      <input id=\"color-label\" type=\"text\" maxlength=\"15\" placeholder=\"Color label\"  class=\"form-text form-element form-element--type-text form-element--api-textfield\">
                  </div>
                  <div class=\"form-item\">
                    <label class=\"form-item__label form-submit-label\">&nbsp;</label>
                    <div class=\"editor-element-extra-margin button button--success js-form-submit form-submit\">Add</div>
                  </div>
              </div>
            ";
    }

    public function getTemplateName()
    {
        return "__string_template__f5584b05ec1a94db3aea767985ae7b6e13e4fb256f7806a2a1a41707aa47c25b";
    }

    public function getDebugInfo()
    {
        return array (  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("", "__string_template__f5584b05ec1a94db3aea767985ae7b6e13e4fb256f7806a2a1a41707aa47c25b", "");
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

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

/* modules/contrib/imce/templates/imce-help.html.twig */
class __TwigTemplate_c117e2269c35735923e15d4935ca46d5e7436494d9f39244b6051f922d466f39 extends \Twig\Template
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
        // line 1
        echo "<p>
  ";
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["markup"] ?? null), 2, $this->source), "html", null, true);
        echo "
</p>

";
        // line 5
        if (($context["videos"] ?? null)) {
            // line 6
            echo "<h3>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Related Videos"));
            echo ":</h3>

  ";
            // line 8
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["videos"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["video"]) {
                // line 9
                echo "
    <h4>";
                // line 10
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["video"], "title", [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
                echo "</h4>
    <iframe width=\"560\" height=\"315\" src=\"";
                // line 11
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["video"], "video", [], "any", false, false, true, 11), 11, $this->source), "html", null, true);
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
    <br/><br/>

  ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['video'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 15
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/imce/templates/imce-help.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 15,  67 => 11,  63 => 10,  60 => 9,  56 => 8,  50 => 6,  48 => 5,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/imce/templates/imce-help.html.twig", "C:\\xampp8\\htdocs\\watering\\web\\modules\\contrib\\imce\\templates\\imce-help.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 5, "for" => 8);
        static $filters = array("escape" => 2, "t" => 6);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape', 't'],
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

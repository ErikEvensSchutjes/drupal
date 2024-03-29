<?php

namespace Drupal\dashboards;

use Drupal\dashboards\Plugin\SectionStorage\DashboardSectionStorage;
use Drupal\dashboards\Plugin\SectionStorage\UserDashboardSectionStorage;
use Drupal\layout_builder\SectionStorageInterface;

trait LayoutBuilderRestrictionHelperTrait {

  public function isDashboardStorage(SectionStorageInterface $section): bool {
    if ($section instanceof DashboardSectionStorage || $section instanceof UserDashboardSectionStorage) {
      return TRUE;
    }
    return FALSE;
  }
}

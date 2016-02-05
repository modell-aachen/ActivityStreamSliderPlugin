# See bottom of file for default license and copyright information

package Foswiki::Plugins::ActivityStreamSliderPlugin;

use strict;
use warnings;

use Foswiki::Func ();
use Foswiki::Plugins ();
use Foswiki::Time ();


use DBI;
use Encode;
use JSON;

our $VERSION = '0.1';
our $RELEASE = '0.1';
our $SHORTDESCRIPTION = 'API and frontend for managing updates';
our $NO_PREFS_IN_TOPIC = 1;


sub initPlugin {
    my ( $topic, $web, $user, $installWeb ) = @_;

    # check for Plugins.pm versions
    if ( $Foswiki::Plugins::VERSION < 2.0 ) {
        Foswiki::Func::writeWarning( 'Version mismatch between ',
            __PACKAGE__, ' and Plugins.pm' );
        return 0;
    }

    my $pluginURL = '%PUBURLPATH%/%SYSTEMWEB%/ActivityStreamSliderPlugin';
    Foswiki::Func::addToZone( 'head', 'ACTIVITYSTREAMSLIDER::STYLES::angular_css', <<STYLE );
<link rel="stylesheet" type="text/css" href="$pluginURL/bin/assets/ActivityStreamSliderPlugin.css" />
STYLE

Foswiki::Func::addToZone( 'head', 'ACTIVITYSTREAMSLIDER::STYLES::font_awesome', <<STYLE );
<link rel="stylesheet" href="$pluginURL/FontAwesome/css/font-awesome.min.css">
STYLE

Foswiki::Func::addToZone( 'script', 'ACTIVITYSTREAMSLIDER::SCRIPTS::angular_js', <<SCRIPT, 'JQUERYPLUGIN::FOSWIKI') unless $topic eq 'WebSearch';
<script type="text/javascript" src="$pluginURL/bin/assets/ActivityStreamSliderPlugin.js"></script>
SCRIPT


    Foswiki::Func::registerTagHandler( 'ACTIVITYSTREAMSLIDER', \&tagSlider );

    return 1;
}

sub finishPlugin {
    
}

sub tagSlider {
    my( $session, $params, $topic, $web, $topicObject ) = @_;

    ($web, $topic) = Foswiki::Func::normalizeWebTopicName( $web, $topic );
    my $ctx = $params->{_DEFAULT} || $params->{context} || "$web.$topic";
    my $parent = $params->{parent} || "";
    my $system = $Foswiki::cfg{SystemWebName} || "System";
    my $template = $params->{template} || 'tasksapi::grid';
    my $templateFile = $params->{templatefile} || 'TasksAPI';

    # Foswiki::Func::loadTemplate( $templateFile );


    return '<div style="display: inline-block;" ng-controller="ActivityButtonCtrl"><span id="toggle-sidebar" ng-click="load_items()" class="button icon"><span class="badge" ng-bind="total_unread"></span></span></div>';
}


1;
__END__
Q.Wiki Tasks API - Modell Aachen GmbH

Author: %$AUTHOR%

Copyright (C) 2014-2015 Modell Aachen GmbH

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version. For
more details read LICENSE in the root of this distribution.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

As per the GPL, removal of this notice is prohibited.

#!/usr/bin/perl -w
# Standard preamble
use strict;
BEGIN { unshift @INC, split( /:/, $ENV{FOSWIKI_LIBS} ); }
use Foswiki::Contrib::Build;

package ActivityStreamSliderPluginBuild;
our @ISA = qw(Foswiki::Contrib::Build);

sub new {
  my $class = shift;
  return bless( $class->SUPER::new( "ActivityStreamSliderPlugin" ), $class );
}

sub target_compress {
  my $this = shift;

  local $| = 1;

  $this->_installDeps();

  print "Building...\n";
  print $this->sys_action( qw(grunt) );
  print "\nDone!\n\n";

  print "Uglifying...\n";
  print $this->sys_action( qw(grunt uglify) );
  print "\nDone!\n\n";
}

sub _installDeps {
  my $this = shift;

  print "Fetching bower dependencies:\n";
  print $this->sys_action( qw(bower install) );
  print "\nDone!\n\n";

  print "Fetching node dependencies:\n";
  print $this->sys_action( qw(npm install) );
  print "\nDone!\n\n";

}

package main;
my $build = ActivityStreamSliderPluginBuild->new('ActivityStreamSliderPlugin');
$build->build( $build->{target} );

